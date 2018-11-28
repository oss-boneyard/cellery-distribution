/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {Graph} from "./components/dependency-graph/index";
import PropTypes from "prop-types";
import React, {Component} from "react";


class DependencyGraph extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);
        console.log(nextState);
        return nextProps.reloadGraph;
    }

    render() {
        if (this.props.data.nodes) {
            return (
                <Graph
                    id={this.props.id}
                    data={this.props.data}
                    config={this.props.config}
                    onClickNode={this.props.onClickNode}
                    onRightClickNode={this.props.onRightClickNode}
                    onClickGraph={this.props.onClickGraph}
                    onClickLink={this.props.onClickLink}
                    onRightClickLink={this.props.onRightClickNode}
                    onMouseOverNode={this.props.onMouseOverNode}
                    onMouseOutNode={this.props.onMouseOutNode}
                    onMouseOverLink={this.props.onMouseOverLink}
                    onMouseOutLink={this.props.onMouseOutLink}
                />
            );
        }
        return (<div>Nothing to show</div>);
    }

}

DependencyGraph.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    onClickNode: PropTypes.func,
    onRightClickNode: PropTypes.func,
    onClickGraph: PropTypes.func,
    onClickLink: PropTypes.func,
    onRightClickLink: PropTypes.func,
    onMouseOverNode: PropTypes.func,
    onMouseOutNode: PropTypes.func,
    onMouseOverLink: PropTypes.func,
    onMouseOutLink: PropTypes.func
};

export default DependencyGraph;