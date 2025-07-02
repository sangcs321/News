import {Image} from "antd";

function Header(){
    return(
        <>
            <div>
                <div style={{width: "1200px", margin: "auto", justifyContent: "start", display: "flex"}}>
                    <Image src="https://cdnweb.dantri.com.vn/dist/static-logo.1-0-1.742f36bc45f3443d0e59.svg" preview={false}/>
                </div>
            </div>
        </>
    )
}

export default Header;