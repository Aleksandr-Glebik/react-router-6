import React from "react"
import { Form } from "react-router-dom"

const NewPost = ({submitting}) => {

    return (
        <Form
              action="/posts/new"
              method="POST"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                border: '1px solid #ccc',
                borderRadius: '15px',
              }}>
         <label style={{margin: 12}}>
            Title:
            <input type='text' name="title" />
         </label>
         <label style={{margin: 12}}>
            Body:
            <input type='text' name="body" />
         </label>
         <input type='hidden' name="userId" value="1" />
         <input type='submit' value="Add post" disabled={submitting}/>
        </Form>
    )
}

export default NewPost