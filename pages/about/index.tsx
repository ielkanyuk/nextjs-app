import Router from 'next/router';
import {MainLayout} from "../../components/MainLayout";

export default function About({title}) {
  return (
    <MainLayout title={'About page'}>
      <h1>{title}</h1>
      <button onClick={() => Router.push('/')}>Go back home</button>
      <button onClick={() => Router.push('/posts')}>Go to Posts</button>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json();

  return {
    title: data.title
  };
};
