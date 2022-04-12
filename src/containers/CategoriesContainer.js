import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchCategories } from '../actions/fetchCategories'
import CategoryInput from '../components/CategoryInput'
import Categories from '../components/Categories'
import Category from '../components/Category'
// import CategoryEdit from '../components/CategoryEdit'



class CategoriesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        return (
            <div>

                <Switch>
                    <Route path='/categories/new' component={CategoryInput} />
                    {/* <Route exact path='.categories/:id/edit' component={CategoryEdit} /> */}
                    {/* <Route exact path='/categories/:id/edit' render={(routerProps) => <Category {...routerProps} categories={this.props.categories}/>} /> */}
                    <Route exact path='/categories/:id' render={(routerProps) => <Category {...routerProps} categories={this.props.categories} />} />
                    <Route path='/categories' render={(routerProps) => <Categories {...routerProps} categories={this.props.categories} />} />
                    {/* <Categories categories={this.props.categories}/> */}
                </Switch>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesContainer)