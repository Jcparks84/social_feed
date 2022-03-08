const DisplayPost = (props) => {
    return (
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Post</th>
            </tr>
        </thead>
            <tbody>
                {props.parentsPost.map((postss)=> {
                    return(
                        <tr>
                            <td>{postss.name}</td>
                            <td>{postss.post}</td>
                        </tr>
                    )
                })}
            </tbody>
    </table>

      );
}
 
export default DisplayPost;props