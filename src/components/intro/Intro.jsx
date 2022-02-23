import './intro.scss';
import TypeAnimation from 'react-type-animation';

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src='assets/kiwon.svg' alt='' />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>안녕하세요. 저는</h2>
                    <p style={{ fontSize: '32px', fontWeight: 700 }}>
                        <span style={{ fontSize: '64px', fontWeight: 700 }}>
                            김기원
                        </span>
                        입니다.
                    </p>
                    <h3>Front-End Developer</h3>
                    <h3>HipHop, EDM Beatmaker</h3>
                    <h3>Artist</h3>
                </div>
                <a href='#portfolio'>
                    <img src='assets/down.png' alt='' />
                </a>
            </div>
        </div>
    );
}
