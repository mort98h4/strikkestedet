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
    },
    {
      id: 0,
      visible: false
    }
  ])

  function handleBurgerClick(e) {
    document.querySelector(".burger-underlay").classList.toggle("toggle");
    document.querySelector(".burger").classList.toggle("toggle");    
    toggleSubMenu(0);
  }

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
    const nextSettings = settings.map(item => {
      item.visible = false;
      return item;
    });

    document.querySelector(".burger-underlay").classList.remove("toggle");
    document.querySelector(".burger").classList.remove("toggle");
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
            <div className="col-span-1 flex justify-end items-center lg:hidden py-2">
              <div className="burger" onClick={handleBurgerClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </div>
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
        <div className="burger-underlay lg:hidden" onClick={handleBurgerClick}></div>
        <SubMenu {...props.pages} settings={settings} subNavItemClick={subNavItemClick}></SubMenu>
      </header>
    </>
  );
}

function SubMenu(props) {
  console.log(props);
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
    <nav className={"sub-menu " + (props.settings[3].visible || props.settings[0].visible || props.settings[1].visible || props.settings[2].visible ?  "translate-x-0 lg:translate-y-0" : "translate-x-full lg:translate-x-0 lg:-translate-y-20")}>
      <div className="2xl:container mx-auto px-8 py-2">
        <div className="hidden lg:flex justify-center items-center">
          {
            (props.settings[0].visible ? productPages : props.settings[1].visible ? learnPages :  aboutPages)
            .map(item => {
              return (
                <SubNavItem key={item.id} {...item} subNavItemClick={props.subNavItemClick}></SubNavItem>
              )
            })
          }
        </div>
        <div className="lg:hidden grid grid-cols-6 gap-4 px-8 pt-8">
          <div className="col-span-6 text-center mb-4">
            <h4 className="font-bold mb-2">Produkter</h4>
            {productPages.map(item => {
              return (
                <SubNavItem key={item.id} {...item} subNavItemClick={props.subNavItemClick}></SubNavItem>
              )
            })}
          </div>
          <div className="col-span-6 text-center mb-4">
            <h4 className="font-bold mb-2">Lær at strikke</h4>
            {learnPages.map(item => {
              return (
                <SubNavItem key={item.id} {...item} subNavItemClick={props.subNavItemClick}></SubNavItem>
              )
            })}
          </div>
          <div className="col-span-6 text-center mb-4">
            <h4 className="font-bold mb-2">Om os</h4>
            {aboutPages.map(item => {
              return (
                <SubNavItem key={item.id} {...item} subNavItemClick={props.subNavItemClick}></SubNavItem>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )

}

function SubNavItem(props) {
  return (
    <div className="mx-8">
      <Link href={`/${props.ancestors.edges[0].node.slug}/${props.slug}`}>
        <a className="transition-all text-black-70 hover:text-black hover:underline" onClick={() => props.subNavItemClick()}>{props.title}</a>
      </Link>
    </div>
  )
}