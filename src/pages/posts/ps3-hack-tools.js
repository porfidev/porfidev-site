import { CloudDownload } from '@styled-icons/material';
import Image from 'next/image.js';
import Link from 'next/link.js';
import styled from 'styled-components';

const Red = styled(CloudDownload)`
  color: #039be5;
  width: 2rem;
`;

export default function PS3HackTools() {
  return (
    <div>
      <h1>PS3 HAck Tools</h1>

      <div>
        <h3>Firmware Hibrido v3.87</h3>
        <div>
          Firmware instalable en versioón oficial de Sony 3.87 o en version hibrida 3.86 o
          anteriores
        </div>
        <Image src={'http://placehold.jp/3d4070/ffffff/320x140.png'} width={320} height={140} />
        <Link href={'https://bit.ly/ps3-hybrid-firmware-487'}>
          <a>
            Descargar
            <Red />
          </a>
        </Link>
      </div>
    </div>
  );
}
