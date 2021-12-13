const API_URL = process.env.WP_API_URL;

async function fetchAPI(query, { variables } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  });

  // error handling work
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
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
              }
              imageHeader
              imageBody
            }
          }
        }
      }
      `
    )

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
              }
              imageHeader
              imageBody
            }
          }
        }
      }
      `
    )

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
              }
              imageHeader
              imageBody
            }
          }
        }
      }
      `
    )

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
              }
              imageHeader
              imageBody
            }
          }
        }
      }
      `
    )

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
        posts(where: {categoryId: 10, tag: "kontakt", orderby: {field: DATE, order: ASC}}) {
          nodes {
            id
            title
            aboutimages {
              image {
                guid
                altText
              }
              imageHeader
              imageBody
            }
          }
        }
      }
      `
    )

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
        }
        posts(where: {categoryId: 10, tag: "handelsbetingelser", orderby: {field: DATE, order: ASC}}) {
          nodes {
            id
            title
            aboutimages {
              image {
                guid
                altText
              }
              imageHeader
              imageBody
            }
          }
        }
      }
      `
    )

    return data;
  }