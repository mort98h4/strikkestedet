// const API_URL = process.env.WP_API_URL;
// const API_URL =
//   "https://mortengross.dk/kea/17_eksamen/strikkestedet/wordpress/graphql";
const API_URL =
  "https://siwmehlin.dk/kea/4_semester/strikkestedet2/wordpress/graphql";

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
              metaFields {
                sideTitel
                sideBeskrivelse
              }
              homepagectasection1 {
                ctaHref1
                ctaText1
                image1 {
                  guid
                  altText
                }
              }
              homepagectasection2 {
                ctaHref2
                ctaText2
                image2 {
                  guid
                  altText
                }
              }
              homepagectasection3 {
                ctaHref3
                ctaText3
                image3 {
                  guid
                  altText
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

export async function getSelectedYarnItems(preview) {
  const data = await fetchAPI(
    `
    query SelectedItems {
      posts(first: 4, where: {categoryId: 4, tag: "udvalgt-produkt"}) {
        edges {
          node {
            id
            title
            slug
            tags {
              nodes {
                name
                slug
              }
            }
            yarnproduct {
              title
              text
              price
              information
              image {
                altText
                guid
                mediaDetails {
                  height
                  width
                }
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

export async function getSelectedPatternsItems(preview) {
  const data = await fetchAPI(
    `
    query SelectedItems {
      posts(first: 4, where: {categoryId: 35, tag: "udvalgt-produkt"}) {
        edges {
          node {
            id
            title
            slug
            tags {
              nodes {
                name
                slug
              }
            }
            opskriftprodukt {
              imageforlist {
                altText
                guid
                mediaDetails {
                  width
                  height
                }
              }
              pris
              text
              title
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
        posts(first: 30, where: {orderby: {field: DATE, order: DESC}}) {
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
          metaFields {
            sideTitel
            sideBeskrivelse
          }
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
          metaFields {
            sideTitel
            sideBeskrivelse
          }
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
          metaFields {
            sideTitel
            sideBeskrivelse
          }
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

export async function getTags() {
  const data = await fetchAPI(
    `query Tags {
        tags (first: 100) {
            nodes {
                name
                slug
                id
                tagType {
                  brand
                  fibre
                  genstand
                  kon
                  pind
                  svaerhedsgrad
                }
            }
        }
    } `
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
      metaFields {
        sideTitel
        sideBeskrivelse
      }
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

export async function getOpskriftPage() {
  const data = await fetchAPI(
    `query opskriftPage {
      page(id: "cG9zdDo0NTQ=") {
    id
    slug
    title
    metaFields {
      sideBeskrivelse
      sideTitel
    }
  }} `
  );
  return data;
}

export async function getOpskriftProducts() {
  const data = await fetchAPI(
    `query OpskriftProducts {
        posts(first: 20, where: {categoryName: "opskriftprodukt"}) {
    edges {
      node {
        title
        slug 
        tags {
          nodes {
            name
            slug
            tagType {
              brand
              fibre
              pind
              svaerhedsgrad
              kon
              genstand
            }
          }
        }
        opskriftprodukt {
          onesize
          image2 {
            altText
            title
            guid
          }
          image3 {
            altText
            title
            guid
          }
          image4 {
            altText
            guid
            title
          }
          imageforlist {
            altText
            guid
            title
          }
          
          maerke
          pris
          text
          title
          
        }
        slug
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
          colorimage {
                guid
                title
                altText
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
    } productimages {
          image1 {
            altText
            guid
            id
            title
          }
          image2 {
            altText
            guid
            id
            title
          }
          image3 {
            altText
            guid
            id
            title
          }
          image4 {
            altText
            guid
            id
            title
          }
          image5 {
            altText
            guid
            id
            title
          }
          image6 {
            altText
            guid
            id
            title
          }
          image7 {
            altText
            guid
            id
            title
          }
          image8 {
            altText
            guid
            id
            title
          }
          image9 {
            altText
            guid
            id
            title
          }
          image10 {
            altText
            guid
            id
            title
          }
          image11 {
            altText
            guid
            id
            title
          }
          image12 {
            altText
            guid
            id
            title
          }
          image13 {
            altText
            guid
            id
            title
          }
          image14 {
            altText
            guid
            id
            title
          }
          image15 {
            altText
            guid
            id
            title
          }
          image16 {
            altText
            guid
            id
            title
          }
          image17 {
            altText
            guid
            id
            title
          }
          image18 {
            altText
            guid
            id
            title
          }
          image19 {
            altText
            guid
            id
            title
          }
          image20 {
            altText
            guid
            id
            title
          }
          image21 {
            altText
            guid
            id
            title
          }
          image22 {
            altText
            guid
            id
            title
          }
          image23 {
            altText
            guid
            id
            title
          }
          image24 {
            altText
            guid
            id
            title
          }
          image25 {
            altText
            guid
            id
            title
          }
          image26 {
            altText
            guid
            id
            title
          }
          image27 {
            altText
            guid
            id
            title
          }
          image28 {
            altText
            guid
            id
            title
          }
          image29 {
            altText
            guid
            id
            title
          }
          image30 {
            altText
            guid
            id
            title
          }
          image31 {
            altText
            guid
            id
            title
          }
          image32 {
            altText
            guid
            id
            title
          }
          image33 {
            altText
            guid
            id
            title
          }
          image34 {
            altText
            guid
            id
            title
          }
          image35 {
            altText
            guid
            id
            title
          }
          image36 {
            altText
            guid
            id
            title
          }
          image37 {
            altText
            guid
            id
            title
          }
          image38 {
            altText
            guid
            id
            title
          }
          image39 {
            altText
            guid
            id
            title
          }
          image40 {
            altText
            guid
            id
            title
          }
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

export async function getKnittingPatterns(slug) {
  const data = await fetchAPI(`query Pattern {postBy(slug: "${slug}") {
    id
    antalgarn1 {
      onesize
      large
      medium
      xsmall
      small
      xlarge
      xxlarge
      yarn {
        ... on Post {
          id
          slug
          title
          yarnproduct {
           price
            image {
              altText
              guid
              id
              title
             
            }
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
    }
    antalgarn2 {
      active
      onesize2
      large2
      medium2
      xsmall2
      small2
      xlarge2
      xxlarge2
      yarn2 {
        ... on Post {
        title
          id
          slug
          
          materiale {
            garn1
            garn2
            garn3
            garn4
            garrn5
          }
          yarnproduct {
          price
            image {
              altText
              guid
              id
              title
            }
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
    }
    opskriftprodukt {
    yarnforthisproduct {
        ... on Post {
          id
          slug
          title
          yarnproduct {
            image {
              altText
              guid
            }
          }
        }
      }
    svaerhedsgrad {
      title
      stjerne1
      stjerne2
      stjerne4
      stjerne5
      stjerne6
      }
      vejledendePinde {
        pind1
        pind2
        pind3
        pind4
      }
      strikkefasthed
      maerke
      pris
      text
      title
      image2 {
        altText
        guid
        id
      }
      image3 {
        altText
        guid
        id
      }
      medudengarn
      imageforlist {
        altText
        guid
        id
      }
    }
  }}`);
  return data;
}

export async function getYarnProducts() {
  const data = await fetchAPI(
    `
      query YarnProducts {
     posts(first:12 ,where: {tag: "GarnProdukt"}) {
    edges {
      node {
        id
        title
         slug
         tags {
          nodes {
            name
            slug
            tagType {
              brand
              fibre
              pind
              svaerhedsgrad
              kon
              genstand
            }
          }
        }
       
        yarnproduct {
        slug
          title
          text
          price
          information
          image {
            mediaDetails {
              width
              height
            }
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
          metaFields {
            sideTitel
            sideBeskrivelse
          }
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
          metaFields {
            sideTitel
            sideBeskrivelse
          }
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
          metaFields {
            sideTitel
            sideBeskrivelse
          }
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
          metaFields {
            sideTitel
            sideBeskrivelse
          }
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

export async function getData(preview) {
  const data = await fetchAPI(
    `
    query Data {
      generalSettings {
        title
        description
      }
      pages(first: 20) {
        nodes {
          id
          title
          slug
          ancestors {
            edges {
              node {
                id
                slug
              }
            }
          }
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
