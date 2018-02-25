import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link, Router } from 'react-router-dom';
import * as UserActions from '../actions/User';

const credentials = {
    email: 'montier.elliott@gmail.com',
    password: 'mon$%FRI23'
};

/**
 * Root Component
 */
const Root = ({userLoggingIn}) => (
    <section>
        <p>root is here</p>
        <button
            onClick={() => {userLoggingIn(credentials)}}>
            Click me
        </button>
    </section>
);

/**
 * Map State To Props
 */
const mapStateToProps = ({user}) => ({user});

/**
 * Map Dispatch to Props
 */
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(UserActions, dispatch)
});

/**
 * Export Root
 */
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));