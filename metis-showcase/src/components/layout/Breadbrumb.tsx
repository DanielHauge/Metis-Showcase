import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { useLocation } from 'react-router-dom';
import './../Main.scss';



class BreadCrumb {
    Url: string;
    Name: string;
    constructor(url: string, name: string) {
        this.Url = url;
        this.Name = name;
    }
}

function GetBreadcrumbs(location: string): BreadCrumb[] {
    const segments = location.slice(1).split("/");
    let currentUrl = "";
    let urls = Array<BreadCrumb>();
    for (const iterator of segments) {
        currentUrl += "/" + iterator;
        urls.push(new BreadCrumb(currentUrl, iterator.charAt(0).toUpperCase() + iterator.slice(1)))
    }
    return urls;
}

function ToBreadCrumbs(urls: Array<BreadCrumb>): Array<React.ReactFragment> {
    let breadcrumbs = Array<React.ReactFragment>();
    for (let index = 0; index < urls.length; index++) {
        const element = urls[index];
        if (index === urls.length-1){
            breadcrumbs.push(<><Breadcrumb.Item active>{element.Name}</Breadcrumb.Item></>)
        } else{
            breadcrumbs.push(<><Breadcrumb.Item href={element.Url}>{element.Name}</Breadcrumb.Item></>)
        }
    }

    return breadcrumbs;
}

export default () => {
    const location = useLocation();
    console.log(location.pathname)
    if (location.pathname === "/") { return (<span></span>) }
    return (
        <>
            <Breadcrumb className={"bc"} bsPrefix={"bc"}>
                <Breadcrumb.Item className={"bc-item"} href="/">🏚</Breadcrumb.Item>
                {ToBreadCrumbs(GetBreadcrumbs(location.pathname))}
            </Breadcrumb>
        </>
    );

}