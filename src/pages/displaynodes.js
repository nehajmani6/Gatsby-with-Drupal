import React from 'react'
import { Link, graphql } from 'gatsby'

export default ({data}) => (
    <div>
        <table>
            <tr>
                <th>Task Name</th>
                <th>Date</th>
            </tr>
            
                { data.allNodeTodoList.edges.map(({ node }) => (
                    <tr>
                        <td>{ node.field_task_name }</td>
                        <td>{ node.field_date }</td>
                    </tr>
                ))}
            
        </table>
    </div>
)



export const query = graphql`
  query {
    allNodeTodoList{
        edges{
            node{
                nid
                field_task_name
                field_date
            }
        }
    }
 }
`