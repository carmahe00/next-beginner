/* import Image from 'next/image'
import img from '../public/1.jpg' */

function PetsPages() {
    return (
        <div>
            {/* <Image src={img} alt="pet" width="280" height="420" placeholder="blur" /> */}
            {
                ['1', '2', '3', '4', '5'].map(path => (
                    <div key={path} >
                        {/* <Image src={`/${path}.jpg`} alt="pet" width="280" height="420" /> */}
                    </div>
                ))
            }
        </div>
    )
}

export default PetsPages