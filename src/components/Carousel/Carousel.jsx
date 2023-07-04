import React, { useEffect, useState } from 'react';
import ArrowImg from './images/arrow.png';
import { Container, Arrow, Option, ImageOption } from './styles';

export default function Carousel({ array, puzzle, index, setIndex }) {

    const next = () => {
        if (index + 1 < array.length) {
            setIndex(index + 1)
        }
    }
    const prev = () => {
        if (index - 1 >= 0) {
            setIndex(index - 1)
        }
    }

    return (
        <>
            <Container>
                <Arrow puzzle={puzzle} onClick={() => next()} src={ArrowImg} />
                {puzzle ? array[index]?.src ? <ImageOption src={array[index]?.src} /> : null
                    : <Option id={array[index]?.id}>{array[index]?.name}</Option>}
                <Arrow puzzle={puzzle} onClick={() => prev()} back={true} src={ArrowImg} />
            </Container>
        </>
    );
};
