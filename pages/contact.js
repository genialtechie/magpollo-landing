import { LetsBuild, LetsBuildLayout } from '../components';

export default function Contact() {
  return <LetsBuild />;
}

Contact.getLayout = (page) => {
  return <LetsBuildLayout>{page}</LetsBuildLayout>;
};
