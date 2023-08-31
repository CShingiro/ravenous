import React from 'react'

const Business = ({ image, name, city, state, zipcode, category, rating, reviewCount }) => {
    let address = <div>
                    <p>{{ city }}</p>
                    <p>{{ state }}</p>
                    <p>{{ zipcode }}</p>
                </div>
    return (
        <div>
            <img src={{image}} alt={{ name }}>{{ name }}</img>
            <h4>{{ name }}</h4>
                {{ address }}
            <h5>{{ category }}</h5>
            <p>{{ rating }} - stars</p>
            <p>{{ reviewCount }} reviews</p>
        </div>
    )
}

export default Business;