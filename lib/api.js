// const API_URL = process.env.WP_API_URL;
const API_URL = "https://mortengross.dk/kea/17_eksamen/strikkestedet/wordpress/graphql";

async function fetchAPI(query, { variables } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { "Content-Type": "application/json" };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  // error handling work
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log("error details", query, variables);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getHomePage(preview) {
  const data = await fetchAPI(
    `
        query homePage {
            page(id: "cG9zdDo4") {
              id
              title
              homepagectasection1 {
                ctaHref1
                ctaText1
                image1 {
                  guid
                }
              }
              homepagectasection2 {
                ctaHref2
                ctaText2
                image2 {
                  guid
                }
              }
              homepagectasection3 {
                ctaHref3
                ctaText3
                image3 {
                  guid
                }
              }
              homepagenewsletter {
                bodyNewsletter
                buttonText
                headerNewsletter
                info
                labelNewsletter
              }
              homepagesection1 {
                body1
                header1
              }
              homepagesection2 {
                body2
                header2
              }
              homepageselecteditems {
                bodySelecteditems
                headerSelecteditems
                label1
                label2
                subheaderSelecteditems
              }
            }
            posts(where: {categoryId: 2}) {
              edges {
                node {
                  id
                  customerreview {
                    customerName
                    customerReview
                    trustpilotStars
                  }
                }
              }
            }
          }
        `
  );

  return data;
}

export async function getAllPosts(preview) {
  const data = await fetchAPI(
    `
      query allPosts {
        posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
          edges {
            node {
              id
              date
              title
              slug
            }
          }
        }
      }
      `
  );

  return data?.posts;
}

export async function getLearnToKnitPage(preview) {
  const data = await fetchAPI(
    `
      query learnToKnitPage {
        page(id: "cG9zdDoxMjY=") {
          id
          title
          learnsection1 {
            body1
          }
        }
        posts(where: {categoryId: 3, orderby: {field: DATE, order: ASC}}) {
          edges {
            node {
              learningvideos {
                videoBody
                videoHeader
                videoNumber
                videoUrl
              }
              id
            }
          }
        }
      }
      `
  );

  return data;
}

export async function getUnderstandPatternsPage(preview) {
  const data = await fetchAPI(
    `
      query understandPatternsPage {
        page(id: "cG9zdDoyNjU=") {
          id
          title
          learnsection1 {
            body1
          }
        }
        posts(where: {categoryId: 8, tag: "forstaa-opskrifter", orderby: {field: DATE, order: ASC}}) {
          nodes {
            id
            title
            learningimages {
              image {
                guid
                altText
                mediaDetails {
                  width
                  height
                }
              }
              imageHeader
              imageBody
            }
          }
        }
      }
      `
  );

  return data;
}

export async function getPatternsPage(preview) {
  const data = await fetchAPI(
    `
      query patternsPage {
        page(id: "cG9zdDoyNjM=") {
          id
          title
          learnsection1 {
            body1
          }
        }
        posts(where: {categoryId: 8, tag: "monstre", orderby: {field: DATE, order: ASC}}) {
          nodes {
            id
            title
            learningimages {
              image {
                guid
                altText
                mediaDetails {
                  width
                  height
                }
              }
              imageHeader
              imageBody
            }
          }
        }
      }
      `
  );

  return data;
}

export async function getYarnPage(preview) {
  const data = fetchAPI(
    `  
    query YarnPage{ 
    pages(where: {title: "Garn"}) {
    nodes {
      id
      yarnpage {
        cta
        text
        title
      }
      }
    }
  }`
  );
  return data;
}

export async function getYarnProduct(slug) {
  const data = await fetchAPI(
    `
      query YarnProducts {
    postBy(slug: "${slug}") {
     id
        title
         slug
        yarnproduct {
        slug
          title
          text
          price
          information
          image {
            altText
            title
            guid
          }
        } stikkefasthed {
      strikkefasthed
    }
    vaskeanvisning {
      vaskeanvisning
    }
    vejledende_pind {
      pind
    }
    loebelaengde {
      lobelaengde
    }
    materiale {
      garn1
      garn2
      garn3
      garn4
      garrn5
    }
        color {
          color1 {
            altText
            guid
            title
            description
          }
          color2 {
            altText
            guid
            title
            description
          }
          color3 {
            altText
            guid
            title
            description
          }
          color4 {
            altText
            guid
            title
            description
          }
          color5 {
            altText
            guid
            title
            description
          }
          color6 {
            altText
            guid
            title
            description
          }
          color7 {
            altText
            guid
            title
            description
          }
          color8 {
            altText
            guid
            title
            description
          }
          color9 {
            altText
            guid
            title
            description
          }
          color10 {
            altText
            guid
            title
            description
          }
          color11 {
            altText
            guid
            title
            description
          }
          color12 {
            altText
            guid
            title
            description
          }
          color13 {
            altText
            guid
            title
            description
          }
          color14 {
            altText
            guid
            title
            description
          }
          color15 {
            altText
            guid
            title
            description
          }
          color16 {
            altText
            guid
            title
            description
          }
          color17 {
            altText
            guid
            title
            description
          }
          color18 {
            altText
            guid
            title
            description
          }
          color19 {
            altText
            guid
            title
            description
          }color20 {
            altText
            guid
            title
            description
          }
          color21 {
            altText
            guid
            title
            description
          }
          color22 {
            altText
            guid
            title
            description
          }color23 {
            altText
            guid
            title
            description
          }color24 {
            altText
            guid
            title
            description
          }color25 {
            altText
            guid
            title
            description
          }
          color26{
            altText
            guid
            title
            description
          }color27 {
            altText
            guid
            title
            description
          }color28 {
            altText
            guid
            title
            description
          }color29 {
            altText
            guid
            title
            description
          }color30 {
            altText
            guid
            title
            description
          }color31 {
            altText
            guid
            title
            description
          }color32 {
            altText
            guid
            title
            description
          }color33 {
            altText
            guid
            title
            description
          }color34 {
            altText
            guid
            title
            description
          }color35 {
            altText
            guid
            title
            description
          }color36 {
            altText
            guid
            title
            description
          }color37 {
            altText
            guid
            title
            description
          }
          color38 {
            altText
            guid
            title
            description
          }
          color39 {
            altText
            guid
            title
            description
          }color40 {
            altText
            guid
            title
            description
          }
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        }
  }  
 } 
 `
  );
  return data;
}

export async function getYarnProducts() {
  const data = await fetchAPI(
    `
      query YarnProducts {
     posts(where: {tag: "GarnProdukt"}) {
    edges {
      node {
        id
        title
         slug
        yarnproduct {
        slug
          title
          text
          price
          information
          image {
            altText
            title
            guid
          }
        }
        color {
          color1 {
            altText
            guid
            title
          }
          color2 {
            altText
            guid
            title
          }
          color3 {
            altText
            guid
            title
          }
          color4 {
            altText
            guid
            title
          }
          color5 {
            altText
            guid
            title
          }
          color6 {
            altText
            guid
            title
          }
          color7 {
            altText
            guid
            title
          }
          color8 {
            altText
            guid
            title
          }
          color9 {
            altText
            guid
            title
          }
          color10 {
            altText
            guid
            title
          }
          color11 {
            altText
            guid
            title
          }
          color12 {
            altText
            guid
            title
          }
          color13 {
            altText
            guid
            title
          }
          color14 {
            altText
            guid
            title
          }
          color15 {
            altText
            guid
            title
          }
          color16 {
            altText
            guid
            title
          }
          color17 {
            altText
            guid
            title
          }
          color18 {
            altText
            guid
            title
          }
          color19 {
            altText
            guid
            title
          }color20 {
            altText
            guid
            title
          }
        }
        
      }
    }
  }
 } 
 `
  );
  return data;
}

export async function getYarnTypesPage(preview) {
  const data = await fetchAPI(
    `
      query yarnTypesPage {
        page(id: "cG9zdDoyNjA=") {
          id
          title
          learnsection1 {
            body1
          }
        }
        posts(where: {categoryId: 8, tag: "garn-typer", orderby: {field: DATE, order: ASC}}) {
          nodes {
            id
            title
            learningimages {
              image {
                guid
                altText
                mediaDetails {
                  width
                  height
                }
              }
              imageHeader
              imageBody
            }
          }
        }
      }
      `
  );

  return data;
}

export async function getAboutUsPage(preview) {
  const data = await fetchAPI(
    `
      query aboutUsPage {
        page(id: "cG9zdDo0MjQ=") {
          id
          title
          aboutsection1 {
            body1
          }
        }
        posts(where: {categoryId: 10, tag: "om-os", orderby: {field: DATE, order: ASC}}) {
          nodes {
            id
            title
            aboutimages {
              image {
                guid
                altText
                mediaDetails {
                  width
                  height
                }
              }
              imageHeader
              imageBody
            }
          }
        }
      }
      `
  );

  return data;
}

export async function getContactPage(preview) {
  const data = await fetchAPI(
    `
      query contactPage {
        page(id: "cG9zdDo0MjY=") {
          id
          title
          aboutsection1 {
            body1
          }
        }
        posts(where: {categoryId: 14, tag: "kontakt", orderby: {field: DATE, order: ASC}}) {
          nodes {
            id
            title
            kontaktMap {
              address
              city
              country
              email
              googleMapsUrl
              phone
              zipCode
            }
          }
        }
      }
      `
  );

  return data;
}

export async function getConditionsPage(preview) {
  const data = await fetchAPI(
    `
      query conditionsPage {
        page(id: "cG9zdDo0Mjg=") {
          id
          title
          aboutsection1 {
            body1
          }
          handelsbetingelser {
            header01
            subheader01
            body01
            header02
            subheader02
            body02
            header03
            subheader03
            body03
            header04
            subheader04
            body04
            header05
            subheader05
            body05
            header06
            subheader06
            body06
            header07
            subheader07
            body07
            header08
            subheader08
            body08
            header09
            subheader09
            body09
            header10
            subheader10
            body10
            header11
            subheader11
            body11
          }
        }
        posts(where: {categoryId: 10, tag: "handelsbetingelser", orderby: {field: DATE, order: ASC}}) {
          nodes {
            id
            title
            aboutimages {
              image {
                guid
                altText
                mediaDetails {
                  width
                  height
                }
              }
              imageHeader
              imageBody
            }
          }
        }
      }
      `
  );

  return data;
}
