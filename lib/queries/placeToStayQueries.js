import { gql } from '@apollo/client';

const GET_PTS = gql`
  query($id: ID!) {
    placeToStay(id: $id, idType: SLUG) {
      title
      uri
      slug
      id
      commonDataAttributes {
        about
        standfirst
        country {
          name
          slug
        }
        imageGallery {
          sourceUrl
        }
      }
      ptsDataAttr {
        destinations {
          ... on Destination {
            title
            id
            slug
          }
        }
        writer {
          ... on Writer {
            title
            id
            slug
          }
        }

        address
        airportTransfers
        allInclusive
        beach
        brand
        city

        fdFeatures
        latitudeOfLocation1
        longitudeOfLocation1
        nearestAirport1
        nearestAirport2
        otherHotelFacilities
        parking
        pool
        priceCheckingLinks {
          url
        }
        pricePerNight
        region
        roomFeatures
        roomForFamilies
        roomType
        selfCatering
        setting
        ski
        standard
        starRating
        website
        timeToAirport
        wifi
      }
    }
  }
`;

export { GET_PTS };