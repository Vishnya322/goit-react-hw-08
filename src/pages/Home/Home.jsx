import PageTitle from '../../components/PageTitle/PageTitle';
import { FaPhoneVolume } from 'react-icons/fa6';
import css from './Home.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle> All the contacts in one book!</PageTitle>
      <PageTitle>Welcome!!</PageTitle>
      <FaPhoneVolume className={css.icon} />
    </div>
  );
}
