import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image";
import _ from 'lodash'
import './relatedcard.scss'

const RelatedCard = ({node}) => {
    const { slug,featuredImage, title } = node

    const image = _.get(
        featuredImage,
        'imageFile.childImageSharp.image500',
        false
    )

    const featuredAlt = _.get(featuredImage, 'altText', false)
    const featuredTitle = _.get(featuredImage, 'title', false)

    return (
        <div key={slug} className="relatedCard">

            <Link to={slug}>

                <div>
                    <Img className="relatedCard_image" fluid={image} title={featuredTitle} alt={featuredAlt} />
                </div>

                <h3
                    className="relatedCard_title"
                >
                    {title}
                </h3>

            </Link>

        </div>
    )
}

export default RelatedCard
