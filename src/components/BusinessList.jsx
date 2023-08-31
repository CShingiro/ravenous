import React from 'react'
import Business from './Business'

const BusinessList = ({ businesses }) => {
    const listedBusinesses = businesses.map(business => {
        <Business 
            image={ business.image }
            name={ business.name }
            city={ business.city }

        />
    })
    return (
        <div>
            { listedBusinesses }
        </div>
    )
}

export default BusinessList