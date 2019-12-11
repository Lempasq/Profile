import React, { useState, useEffect } from 'react'
import './mainStyles.scss'
import jobExp from '../../assets/jobExp.jpg'
import axios from 'axios';

export default () => {

    // DATA FOR LISTS
    const frontEndList = [{
        color: 'orange',
        className: 'fab fa-2x fa-html5',
        span: ' html'
    }, {
        color: 'dodgerblue',
        className: 'fab fa-2x fa-css3-alt',
        span: ' css'
    }, {
        color: 'hotpink',
        className: 'fab fa-2x fa-sass',
        span: ' sass'
    }, {
        color: 'yellow',
        className: 'fab fa-2x fa-js-square',
        span: ' ecmascript'
    }, {
        span: ' + typescript'
    }, {
        color: 'lightskyblue',
        className: 'fab fa-2x fa-react',
        span: ' react'
    }, {
        span: ' + redux'
    }];

    const backEndList = [{
        color: 'green',
        className: 'fab fa-2x fa-node-js',
        span: ' node.js'
    }, {
        span: ' + express'
    }, {
        color: 'forestgreen',
        className: 'fas fa-2x fa-database',
        span: 'mongoDB'
    }, {
        span: '+ RESTful api'
    }]
    
    const boilerPlateList = [{
        color: 'red',
        className: 'fab fa-2x fa-npm',
        span: ' npm'
    }, {
        span: ' + babel'
    }, {
        span: ' + webpack'
    }, {
        color: 'orangered',
        className: 'fab fa-2x fa-git-alt',
        span: ' git'
    }]

    // HEADER BUTTONS
    const makeNewList = (listOfArray) => listOfArray.map(({color, className, span}, index) => (
        <li key={`My key: ${index}`}>
            {className && (<i style={{color: color}} className={className}></i>)}
            <span>{span}</span>
        </li>
    ))

    const firstList = [{
        html: (makeNewList(frontEndList)),
        text: 'Front-end:'
    }, {
        html: (makeNewList(backEndList)),
        text: 'Back-end:'
    }, {
        html: (makeNewList(boilerPlateList)),
        text: 'Boilerplate:'
    }]

    const makeFirstList = (firstList) => firstList.map(({html, text}, index) => (
        <li className={'firstListLi'} key={`${text}: ${index}`}>
            {text}
            <ul>
                {html}
            </ul>
        </li>
    ))

    return (
        <main>
            <article className="mainArticle">
                <section className="mainSection" id={"firstMainSection"}>
                    <p><b>About me:</b></p>
                    <div>Dmitriy Kalinnikov, 21 y.o, introvert, perfectionist</div>
                    <br/>
                    <div>Hi there!</div>
                    <div>I am full stack developer, which has experience in developing the Back-end and Front-end components, which are mainly applicable to SPA.
                        Working with me you can count on easy to read and not out of date code. I am constantly improving, using only current solutions at the moment. React hooks, lazy load, slick slider, redux, all this I use on an ongoing basis</div>
                    <br/>
                    <div>At the moment, I work with one of the most popular and modern MERN stack. Therefore: MongoDB, Express, ReactJS, NodeJS is my choice.</div>
                    <br/>
                    <div>
                        Technologies used: <br/>
                        Front-end: HTML5, CSS3, SASS, JS, Typescript, ReactJS, Redux, VueJS <br/>
                        Back-end: NodeJS, Express, MongoDB, hapi/joi, <br/>
                        Other: Git, Webpack <br/>
                    </div>
                </section>
                <section className="mainSection" id={"secondMainSection"}>
                    <div>
                    <p>Начал обучение в начале этого года, в основном это:</p>
                    <ul className={'firstList'}>
                        {makeFirstList(firstList)}
                    </ul>
                    </div>
                </section>
                <section className="mainSection" id={"thirdMainSection"}>
                    <img src={jobExp} alt=""/>
                </section>
                <section className="mainSection" id={"fourthMainSection"}>
                    <ul>
                        <li><i className="fas fa-2x fa-mobile-alt"></i> +38(066)453-02-74</li>
                        <li><i className="far fa-2x fa-envelope-open"></i> lem.pasq0236@gmail.com</li>
                        <li><a target={'_blank'} href="https://t.me/lempasq"><i className="fab fa-2x fa-telegram"></i> Telegram</a></li>
                        <li><i className="fab fa-2x fa-skype"></i> idom1n</li>
                    </ul>
                </section>
            </article>
        </main>
    )
}