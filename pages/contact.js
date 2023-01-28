import { LetsBuild, LetsBuildForm, LetsBuildLayout } from '../components';

export default function Contact() {
  return (
    <div className="overflow-hidden">
      <LetsBuild />
    </div>
  );
}

Contact.getLayout = (page) => {
  return <LetsBuildLayout>{page}</LetsBuildLayout>;
};
