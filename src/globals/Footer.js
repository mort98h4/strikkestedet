import {useState, useEffect} from 'react';

import Link from "next/link";
// import { getFooter } from "../../lib/api";

export default function Footer(props) {
  console.log(props);
  const learnId = "cG9zdDo0MDY=";
  const learnPages = [];
  props.pages.nodes.forEach(page => {
    if(page.ancestors != null && page.ancestors.edges.findIndex(item => item.node.id === learnId) != -1) {
      learnPages.unshift(page);
    }
  })
  console.log(learnPages);

    return (
      <footer className="bg-gray-footer w-full">
        <div className="2xl:container px-8 py-16 2xl:px-0 mx-auto grid grid-cols-6 gap-4">
              <div className="col-span-6">
                <h3 className="font-serif text-xl lg:text-3xl">{props.generalSettings.title}</h3>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <ul>
                  <li>
                    <a href="tel:24449392">+45 2444 9392</a>
                  </li>
                  <li>
                    <a href="mailto:lene@strikkestedet.dk">lene@strikkestedet.dk</a>
                  </li>
                  <li>Hvidovrevej 324</li>
                  <li>2650 Hvidovre</li>
                  <li>Danmark</li>
                </ul>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <h4>Produkter</h4>
                <ul>

                </ul>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <h4>Lær at strikke</h4>
                <ul>
                  {learnPages.map(item => {
                    return (
                      <NavItem key={item.id} {...item}></NavItem>
                    )
                  })}
                </ul>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <h4>Om os</h4>
                <ul>

                </ul>
              </div>
            </div>
        
      </footer>
    );
  }

 
function NavItem(props) {
  console.log(props);
  return (
    <li>
      <Link href={`/learn/${props.slug}`}>{props.title}</Link>
    </li>
  )
}