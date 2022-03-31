import React from 'react'
import {connect} from 'react-redux'

import { fetchCategories } from '../actions/fetchCategories'
import CategoryInput from '../components/CategoryInput'
import Categories from '../components/Category'

class CategoriesContainer extends React.Component {
   
    componentDidMount(){
        this.props.fetchCategories()
    }
   
    render() {
        return (
            <div>
                CategoriesContainer
                <CategoryInput/>
                <Categories categories={this.props.categories}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, {fetchCategories}) (CategoriesContainer)