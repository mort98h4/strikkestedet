import Link from "next/link";
import AddressList from "../components/AddressList";

export default function Footer(props) {
  console.log(props);
  const address = props.posts.nodes.map(item => {
    if (item.id === "cG9zdDo0NDE=") {
        return item;
    }
});
  const productsId = "cG9zdDo0MzA=";
  const learnId = "cG9zdDo0MDY=";
  const aboutId = "cG9zdDo0MjI=";
  const productPages = [];
  const learnPages = [];
  const aboutPages = [];

  props.pages.nodes.forEach(page => {
    if (page.ancestors != null && page.ancestors.edges.findIndex(item => item.node.id === productsId) != -1) {
      productPages.unshift(page);
    } else if (page.ancestors != null && page.ancestors.edges.findIndex(item => item.node.id === learnId) != -1) {
      learnPages.unshift(page);
    } else if (page.ancestors != null && page.ancestors.edges.findIndex(item => item.node.id === aboutId) != -1) {
      aboutPages.unshift(page);
    }
  });

    return (
      <footer className="bg-gray-footer w-full">
        <div className="2xl:container px-8 py-16 2xl:px-0 mx-auto grid grid-cols-6 gap-4">
              <div className="col-span-6">
                <h3 className="font-serif footer-text-center text-xl lg:text-3xl">{props.generalSettings.title}</h3>
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-1 mb-4">
                {address.map(item => {
                    return <AddressList key={item.id} {...item} color="text-black-70 footer-text-center"></AddressList>
                })}
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-1 mb-4">
                <h4 className="footer-text-center font-bold mb-2">Produkter</h4>
                <ul className="footer-text-center text-black-70">
                  {productPages.map(item => {
                    return (
                      <NavItem key={item.id} {...item}></NavItem>
                    )
                  })}
                </ul>
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-1 mb-4">
                <h4 className="footer-text-center font-bold mb-2">Lær at strikke</h4>
                <ul className="footer-text-center text-black-70">
                  {learnPages.map(item => {
                    return (
                      <NavItem key={item.id} {...item}></NavItem>
                    )
                  })}
                </ul>
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-1 mb-4">
                <h4 className="footer-text-center font-bold mb-2">Om os</h4>
                <ul className="footer-text-center text-black-70">
                  {aboutPages.map(item => {
                    return (
                      <NavItem key={item.id} {...item}></NavItem>
                    )
                  })}
                </ul>
              </div>
              <div className="col-span-6 lg:col-span-2 mb-4">
                <h4 className="text-center font-bold mb-2 w-full">Følg os</h4>
                <div className="flex justify-center">
                  <a className="mx-1 transition opacity-70 hover:opacity-100" href="https://www.facebook.com/strikkestedet2650" target="_blank">
                    <img src="./../facebook_icon.svg" alt="Facebook icon"></img>
                  </a>
                  <a className="mx-1 transition opacity-70 hover:opacity-100" href="https://www.instagram.com/strikkestedet" target="_blank">
                    <img src="./../instagram_icon.svg" alt="Instagram icon"></img>
                  </a>
                </div>
              </div>
            </div>
        
      </footer>
    );
  }

 
function NavItem(props) {
  return (
    <li>
      <Link href={`/${props.ancestors.edges[0].node.slug}/${props.slug}`}><a className="transition-all hover:text-black hover:underline">{props.title}</a></Link>
    </li>
  )
}