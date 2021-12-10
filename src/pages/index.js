import Head from 'next/head'
import Image from 'next/image'
import { getHomePage, getAllPosts } from "../../lib/api";



export default function Home(props) {
  console.log(props);
  return (
    <>
    <h1 className="font-serif">{props.page.title}</h1>
    <img src={props.page.homepage.image1.guid}></img>
    </>
  )
}

export async function getStaticProps() {
  const page = await getHomePage();
  return {
    props: {
      page
    }
  }
  // const allPosts = await getAllPosts();
  // return {
  //   props: {
  //     allPosts
  //   }
  // };
}