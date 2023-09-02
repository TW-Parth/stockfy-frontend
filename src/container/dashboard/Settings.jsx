import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import ImgFile from '../../assets/images/file-upload.svg';
import { IconCopy } from '../../component/global/Icons';
import { SUCCESS_MESSAGE } from '../../helpers/constant';
import { getWebhookConfig, handleFile } from '../../services/settings/settings.services';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Settings = () => {
  const [webhook, setWebhook] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [uploadingFile, setUploadingFile] = useState(false);

  const inputRef = useRef();
  useEffect(()=> {
    getWebhookUrl();
  }, [])

  const getWebhookUrl = async () => {
    const { data } = await getWebhookConfig();
    setWebhook({
      url: data?.url,
      payload: data?.payload,
    })
  }

  const handleFileUpload = async (e) => {
    setUploadingFile(true);
    try{
      const payload = new FormData();
      payload.append('file', e.target.files[0]);
      await handleFile(payload);
      toast.success(SUCCESS_MESSAGE.FILE_UPLOAD);
    }catch(e){
      console.log(e);
    }finally{
      setUploadingFile(false);
    }
  }

  const handleDivClick = () => {
    inputRef.current.click();
  }

  return (
    <>
      <div className="dashboard-Container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-8">
              <div className="card p-3">
                <h3 className="mb-3 text-center">Setting</h3>
                <form>
                  <div className="key-block">
                    <label className="form-label font-700">Web-Hook</label>
                    <Button variant="primary" onClick={handleShow}>
                      Launch demo modal
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title style={{color:'black'}}>Webhook Integration</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{color: 'black'}}> <ul><b>UserId: 64f2f2004631e03b53773349 </b>
                      <b>webhook endpoint: http://192.168.1.190:3001/webhook/ </b>
                      </ul>
                      <ul>
                        <li>You have to invoke this webhook on successful order placed</li>
                        <li>You need to send following curl request. Which is mentioned below.</li>
                      </ul>
                      <div style={{backgroundColor: 'slategrey'}}>{`curl --location '192.168.1.190:3001/webhook/' \
--form 'userId=""' \
--form 'orderId=""' \
--form 'orderDate=""' \
--form 'shipDate=""' \
--form 'shipMode=""' \
--form 'customerId=""' \
--form 'customerName=""' \
--form 'segment=""' \
--form 'country=""' \
--form 'city=""' \
--form 'state=""' \
--form 'postalCode=""' \
--form 'region=""' \
--form 'productId=""' \
--form 'category=""' \
--form 'subCategory=""' \
--form 'productName=""' \
--form 'price=""' \
--form 'quantity=""' \
--form 'discount=""' \
--form 'profit=""' \
--form 'brandId=""' \
--form 'brandName=""' \
--form 'totalProductSells=""' \
--form 'productRating=""' \
--form 'stock=""'`}</div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <div className="api-key">
                      <span>{webhook?.url}</span>
                      <button type="button" className="btn btn-primary">
                        <IconCopy />
                      </button>
                    </div>
                  </div>

                  <div className="img-upload-block" onClick={uploadingFile ? undefined : handleDivClick}>
                    <div className="form-group mb-0">
                      <label className="form-label font-700">Historical Data</label>
                      <div className="user-img-block d-flex justify-content-center">
                        <img src={ImgFile} alt="" />
                      </div>
                      <div className="upload-btn ">
                        <input ref={inputRef} disabled={uploadingFile} className="form-control" id="Choose a file" name="file" type="file" onChange={handleFileUpload} />
                        <button type="button" className="btn btn-primary w-100">
                          Upload a file
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
