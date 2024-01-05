'use client';

import {
  BuildCircle,
  ReportProblem,
  SyncProblem,
  ArrowRight,
  ArrowBack,
  ArrowForwardIosSharp,
} from '@mui/icons-material';
import Link from 'next/link';
import { useAtlasUser } from '@/context/UserContext';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Avatar, Skeleton } from '@mui/material';

function determineIcon(desc: string): JSX.Element {
  //check if desc starts with any of the following words (inspect, replace, change, rotate) and return the appropriate icon
  if (desc.startsWith('Inspect')) {
    return <ReportProblem className="text-orange-500" />;
  } else if (desc.startsWith('Replace')) {
    return <BuildCircle className="text-red-500" />;
  } else if (desc.startsWith('Change')) {
    return <SyncProblem className="text-primary" />;
  } else if (desc.startsWith('Rotate')) {
    return <SyncProblem className="text-primary" />;
  } else {
    return <ReportProblem className="text-orange-500" />;
  }
}

function MiniAccordion({
  children,
  summary,
}: {
  children: React.ReactNode;
  summary: string;
}): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="flex flex-row items-center text-gray-500">
        <ArrowRight
          className={`text-4xl ${expanded ? 'rotate-90' : ''}`}
          onClick={handleChange}
        />
        <p
          className={`text-lg font-semibold cursor-pointer hover:underline ${
            expanded ? 'underline' : ''
          }`}
          onClick={handleChange}
        >
          {summary}
        </p>
      </div>
      {expanded && (
        <div
          className={`my-2 transform transition-transform duration-300 ease-in-out ${
            expanded ? 'translate-y-0 scale-100' : '-translate-y-full scale-0'
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Maint(): JSX.Element {
  const { user } = useAtlasUser();
  const [data, setData] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('quickCheck');
      return item ? JSON.parse(item) : null;
    }
  });
  const [expanded, setExpanded] = useState<string | false>(false);
  const [showAll, setShowAll] = useState<{
    expanded: boolean;
    itemsToShow: number;
  }>({ expanded: false, itemsToShow: 5 });

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    showAll.expanded
      ? setShowAll({ expanded: false, itemsToShow: 5 })
      : setShowAll({ expanded: true, itemsToShow: data?.maint?.length });
  };

  useEffect(() => {
    localStorage.setItem('quickCheck', JSON.stringify(data));
    console.log(data ? data : 'no data');
  }, [data]);

  const pastDue = data?.maint?.filter(
    (item: any) =>
      item.due_mileage ==
      Math.max(
        ...data?.maint
          ?.filter((item: any) => item.due_mileage)
          .map((item: any) => item.due_mileage)
      )
  );
  return (
    <section>
      <Link
        href="/dashboard"
        className="mb-3 font-semibold text-gray-500 flex flex-row items-center hover:underline"
      >
        <ArrowBack className="mr-2" /> Dashboard
      </Link>
      <h1 className="text-3xl text-gray-900 font-semibold mb-10 p-2">
        Maintenance
      </h1>
      <div className="p-3 border border-gray-400 rounded-md mb-5">
        {user?.cars && user?.cars?.length > 0 && (
          <div className="flex flex-col">
            <h1 className=" uppercase font-semibold font-serif mb-1">
              {user?.cars ? 'Your Vehicle' : 'Add a Vehicle'}
            </h1>
            {user?.cars[0] ? (
              <p className="text-black/60 text-lg mb-1">
                {user?.cars[0].year} {user?.cars[0].make} {user?.cars[0].model}
              </p>
            ) : (
              <Skeleton
                variant="text"
                width={200}
                height={30}
              />
            )}
            {user?.cars[0]?.engine ? (
              <p className="text-black/60 md:text-base mb-1">
                Engine: {user?.cars[0].engine}{' '}
              </p>
            ) : (
              <Skeleton
                variant="text"
                width={200}
                height={30}
              />
            )}
            {user?.cars[0]?.transmission ? (
              <p className="text-black/60 whitespace-nowrap md:text-base mb-1">
                Transmission: {user?.cars[0].transmission}{' '}
              </p>
            ) : (
              <Skeleton
                variant="text"
                width={200}
                height={30}
              />
            )}
          </div>
        )}
      </div>
      <div className="p-3 border border-gray-400 rounded-md mb-5">
        <h1 className="text-2xl text-gray-500 font-semibold mb-5 flex flex-row items-center">
          Recalls{' '}
          <Avatar className="bg-primary w-8 h-8 ml-3 text-xl mt-1">
            {data?.recalls?.length}
          </Avatar>
        </h1>
        {data?.recalls?.length > 0 ? (
          <div className="flex flex-col">
            {data?.recalls?.map((recall: any, index: number) => (
              <Accordion
                key={recall.campaign_number}
                expanded={expanded === `panel${index + 1}`}
                onChange={handleChange(`panel${index + 1}`)}
              >
                <AccordionSummary
                  aria-controls={`panel${index + 1}d-content`}
                  id={`panel${index + 1}d-header`}
                  className="w-full"
                >
                  <div className="flex flex-row items-center">
                    <span>
                      <SyncProblem
                        sx={{ fontSize: '35px' }}
                        className={
                          //convert recall_date to date object and compare to current date to determine if recall is within 6 months and display appropriate color icon
                          new Date(recall.recall_date) >
                          new Date(
                            new Date().setMonth(new Date().getMonth() - 6)
                          )
                            ? 'text-red-500'
                            : 'text-primary'
                        }
                      />
                    </span>
                    <span className="ml-3 text-lg capitalize font-semibold">
                      <p>
                        {
                          //shorten text to 15 words and add ellipsis
                          recall.consequence
                            .toLowerCase()
                            .split(' ')
                            .slice(0, 15)
                            .join(' ') + '...'
                        }
                      </p>
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col p-2">
                    <span className="flex flex-row mb-3">
                      <p className="text-black/60 mr-3">
                        Date:{' '}
                        {new Date(recall.recall_date).toLocaleDateString()}
                      </p>
                      <p className="text-black/60">
                        Recall No.: {recall.recall_number}
                      </p>
                    </span>

                    <p className="text-lg mb-3 normal-case">
                      {recall.consequence.toLowerCase()}
                    </p>
                    <div className="mb-2">
                      <MiniAccordion summary="Description">
                        <p className="text-lg normal-case">{recall.desc}</p>
                      </MiniAccordion>
                    </div>
                    <div className="mb-2">
                      <MiniAccordion summary="Remedy">
                        <p className="text-lg normal-case">
                          {recall.corrective_action}
                        </p>
                      </MiniAccordion>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        ) : (
          <p className="text-black/60 text-lg mb-1">No recalls found.</p>
        )}
      </div>
      <div className="p-3 border border-gray-400 rounded-md mb-5">
        <h1 className="text-2xl text-gray-500 font-semibold mb-5 flex flex-row items-center">
          Past Due{' '}
          <Avatar className="bg-primary w-8 h-8 ml-3 text-xl mt-1">
            {/* find all maintenances due at the highest due_mileage */}
            {pastDue && pastDue?.length}
          </Avatar>{' '}
          {pastDue?.length > 0 && (
            <i className="text-xs ml-2 mt-1 font-normal">
              at {pastDue[0].due_mileage} miles
            </i>
          )}
        </h1>
        {pastDue?.length > 0 ? (
          <div>
            <div className="flex flex-col border-b">
              {pastDue
                .slice(0, showAll.itemsToShow)
                .map((item: any, index: number) => (
                  <div
                    className="flex flex-row items-center p-5 bg-[#000000]/5 border-x border-t border-gray-300"
                    key={index}
                  >
                    <span>{determineIcon(item.desc)}</span>
                    <span className="ml-3 text-lg capitalize font-semibold">
                      <p>{item.desc}</p>
                    </span>
                  </div>
                ))}
            </div>
            <button
              className="mt-3 mx-auto block px-4 py-2 h-fit w-fit bg-primary border-white border-2 text-white rounded-lg hover:bg-white hover:text-primary hover:border-primary transition-all duration-300 ease-in-out"
              onClick={handleClick}
            >
              {showAll.expanded ? 'Show Less' : 'Show All'}
            </button>
          </div>
        ) : (
          <p className="text-black/60 text-lg mb-1">No past due found.</p>
        )}
      </div>
    </section>
  );
}
