import React from 'react'

import Header from '../Components/Header/Header'
import View from '../Components/View/View'

function ViewPost(props) {
    return (
        <div>
            <Header user={props.user?.displayName} />
            <View/>
        </div>
    )
}

export default ViewPost
