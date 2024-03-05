import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';

const { primary_accent_color } = colors;

function HeaderContent() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
        alignItems: 'center',
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={150} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        <Link
          to="/"
          style={{
            color: '#E2F0F7',
            paddingRight: '7rem',
            fontSize: '1.4rem',
          }}
        >
          Home
        </Link>
        <Link
          to="/graphs"
          style={{ color: '#E2F0F7', paddingRight: '30px', fontSize: '1.4rem' }}
        >
          Graphs
        </Link>
      </div>
    </div>
  );
}

export { HeaderContent };
