// Footer.js

import React from 'react';

const Footer = () => {
	return (
	<footer className="text-white p-5">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center ">

					{/* Dark img overlay */}

					<div style={{ position: 'relative'}}>
						<div
							className="rounded"
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Adjust opacity as needed
							}}
						/>

						{/* Image */}

						<img
							src="/image_sea.jpg"
							alt="Footer Image"
							className="img-fluid rounded shadow-2-strong"
							style={{ 
								width: '100%',
								objectPosition: 'bottom',
								maxHeight: '500px',
								objectFit: 'none',
								zIndex: 1
							}}
						/>

						{/* Text and button over the image */}

						<div
							style={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								zIndex: 2,
								textAlign: 'center',
								width: '100%',
							}}
							>
							<h2 className='title' style={{ marginBottom: '10px' }}>ΔΕΝ ΒΡΗΚΑΤΕ ΑΥΤΟ ΠΟΥ ΨΑΧΝΑΤΕ;</h2>
							<button
								style={{
									background: 'none',
									border: '1px solid white',
									borderRadius: '10px',  
									padding: '10px',
									color: 'white',
									cursor: 'pointer',
								}}
							>
								Επικοινωνήστε μαζί μας 📮
							</button>
						</div>
					</div>
				</div>
			</div>
      	</div>
    </footer>
  );
};

export default Footer;
