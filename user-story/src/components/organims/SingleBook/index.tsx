import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BooksThumbnail from '../../atoms/booksthumbnails';
import Buttons from '../../atoms/buttons';
import TextTypography from '../../atoms/typography';
import SecondarySelectedTab from '../../molecules/SecondarySelectedTabs';

type SingleBook = {
    title: string;
    moto: string;
    author: string;
    src: string;
    content?: React.ReactNode;
}

type SingleBookProps = {
    style?: React.CSSProperties;
    books: SingleBook;
}

const SingleBook = (props: SingleBookProps) => {
    const [books, setBooks] = useState();
    
    const getBooksData = async () => {
        const data = await api.get(`/books/${ID}`);
        setBooks(data.response)
    }
    useEffect(() => {
        getBooksData();
    }, [, books]);


    const handleReadMe = () => {
        // add book to reading section;
    }

    const handleByeMe = () => {
        // bye this book;
    }

    const handleKindle = () => {
        // add book to kindle section;
    }

  return (
    <div>
        <Grid container>
            <Grid container>
                <Grid item direction={"column"}>
                    <TextTypography variant='h1'>{props.books.title}</TextTypography>
                    <TextTypography variant='h1'>{props.books.moto}</TextTypography>
                    <TextTypography variant='h1'>{props.books.author}</TextTypography>
                    <Grid item style={props.style}>
                        <Buttons onClick={handleReadMe}>{"Read Me"}</Buttons>
                        <Buttons onClick={handleByeMe}>{"Bye Me"}</Buttons>
                        <Buttons onClick={handleKindle}>{"Send to kindle"}</Buttons>
                    </Grid>
                </Grid>
                <Grid item>
                    <BooksThumbnail src={props.books.src}/>
                </Grid>
            </Grid>
            <Grid container>
                <SecondarySelectedTab firstTab={"Synopsis"} secondTab={"Who it is for"}  thirdTab={"About the author"} content={props.books.content}/>
            </Grid>
        </Grid>
    </div>
  )
}

export default SingleBook