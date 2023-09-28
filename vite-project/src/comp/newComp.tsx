import { useState } from 'react';
import MetaData from './metaData';
function NewComp() {
    const [url, setUrl] = useState('');
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const [date, setDate] = useState('');
    const generateQrCode = (e: any) => {
        e.preventDefault();
        const encodedUrl = encodeURIComponent(url);
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedUrl}&size=100x100`;
        setQrCodeUrl(qrCodeUrl);
    };
    return (
        <div>
            <form onSubmit={generateQrCode}>
                <label>
                    URL:
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </label>
                <button type="submit">Create QR code</button>
            </form>
            {qrCodeUrl && (
                <div>
                    <img src={qrCodeUrl} alt="QR code" />
                </div>
            )}
            <MetaData qrCodeUrl={url} date={date} />
        </div>
    );
}
export default NewComp;