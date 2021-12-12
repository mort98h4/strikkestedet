import { useState } from 'react';
import Link from "next/link";
import { setConstantValue } from 'typescript';

export default function Header(props) {
  // const [productsVisible, setProductsVisible] = useState(false);
  // const [learnVisible, setLearnVisible] = useState(false);
  // const [aboutVisible, setAboutVisible] = useState(false);
  const [settings, setSettings] = useState([
    {
      id: 1,
      visible: false,
    },
    {
      id: 2,
      visible: false
    },
    {
      id: 3,
      visible: false,
    }
  ])

  function toggleSubMenu(payload) {
    const nextSettings = settings.map(item => {
      if (item.id === payload) {
        item.visible = !item.visible;
      } else {
        item.visible = false;
      }
      return item;
    })
    setSettings(nextSettings);
  }

  function subNavItemClick() {
    console.log('Clicked');
    const nextSettings = settings.map(item => {
      item.visible = false;
      return item;
    });
    setSettings(nextSettings);
  }

  return (
    <>
      <header className="w-full fixed z-10">
        <nav className="w-full bg-black relative z-30 shadow">
          <div className="2xl:container mx-auto grid grid-cols-6 gap-x-4 px-8">
            <div className="lg:absolute col-span-5 lg:col-span-1 py-2">
              <Link href="/">
                <a className="text-white font-serif text-lg lg:text-xl" onClick={subNavItemClick}>{props.generalSettings.title}</a>
              </Link>
            </div>
            {/* TODO: this will become a burgermenu */}
            <div className="col-span-1 lg:hidden py-2"></div>
            {/* TODO: this will become a burgermenu END */}
            <div className="hidden lg:flex lg:col-span-6 gap-x-4 justify-center items-center py-3">
              <div className="mx-8">
                <a className="text-white text-bold cursor-pointer hover:underline" onClick={() => toggleSubMenu(1)}>Produkter</a>
              </div>
              <div className="mx-8">
                <a className="text-white text-bold cursor-pointer hover:underline" onClick={() => toggleSubMenu(2)}>Lær at strikke</a>
              </div>
              <div className="mx-8">
                <a className="text-white text-bold cursor-pointer hover:underline" onClick={() => toggleSubMenu(3)}>Om os</a>
              </div>
            </div>
          </div>
        </nav>
        <SubMenu {...props.pages} settings={settings} subNavItemClick={subNavItemClick}></SubMenu>
      </header>
    </>
  );
}

function SubMenu(props) {
  // console.log(props);
  const productsId = "cG9zdDo0MzA=";
  const learnId = "cG9zdDo0MDY=";
  const aboutId = "cG9zdDo0MjI=";
  const productPages = [];
  const learnPages = [];
  const aboutPages = [];

  props.nodes.forEach(page => {
    if (page.ancestors != null && page.ancestors.edges.findIndex(item => item.node.id === productsId) != -1) {
      productPages.unshift(page);
    } else if (page.ancestors != null && page.ancestors.edges.findIndex(item => item.node.id === learnId) != -1) {
      learnPages.unshift(page);
    } else if (page.ancestors != null && page.ancestors.edges.findIndex(item => item.node.id === aboutId) != -1) {
      aboutPages.unshift(page);
    }
  });

  return (
    <nav className={"hidden lg:block bg-gray-header w-full relative z-20 transition-all duration-500 shadow " + (props.settings[0].visible || props.settings[1].visible || props.settings[2].visible ?  "translate-y-0" : "-translate-y-20")}>
      <div className="2xl:container mx-auto grid grid-cols-6 gap-x-4 px-8 py-2">
        <div className="flex justify-center items-center col-span-6">
          {
            (props.settings[0].visible ? productPages : props.settings[1].visible ? learnPages :  aboutPages)
            .map(item => {
              return (
                <SubNavItem key={item.id} {...item} subNavItemClick={props.subNavItemClick}></SubNavItem>
              )
            })
          }
        </div>
      </div>
    </nav>
  )

}

function SubNavItem(props) {
  console.log(props);

  return (
    <div className="mx-8">
      <Link href={`/${props.ancestors.edges[0].node.slug}/${props.slug}`}>
        <a className="transition-all text-black-70 hover:text-black hover:underline" onClick={() => props.subNavItemClick()}>{props.title}</a>
      </Link>
    </div>
  )
}