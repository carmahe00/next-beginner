import { useRouter } from 'next/router'

function Doc({ params = [] }) {

    console.log(params)
    if (params.length == 2)
        return (<h1>Viewing docs for feature {params[0]} and concepts {params[1]}</h1>)
    else if (params.length == 1)
        return <h1>Viewing docs for feature {params[0]}</h1>
    return <h1>Docs Home Page</h1>
}

Doc.getInitialProps = async ctx => {
    try {
        const { params } = ctx.query


        return { params }
    } catch (error) {
        return { errorLoading: true };
    }
}

export default Doc