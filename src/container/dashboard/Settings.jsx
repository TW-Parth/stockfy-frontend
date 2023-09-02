import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import ImgFile from '../../assets/images/file-upload.svg';
import { IconCopy } from '../../component/global/Icons';
import { SUCCESS_MESSAGE } from '../../helpers/constant';
import { getWebhookConfig, handleFile } from '../../services/settings/settings.services';

const Settings = () => {
  const [webhook, setWebhook] = useState();
  const [uploadingFile, setUploadingFile] = useState(false);

  const inputRef = useRef();
  useEffect(()=> {
    getWebhookUrl();
  }, [])

  const getWebhookUrl = async () => {
    const { data } = await getWebhookConfig();
    setWebhook({
      url: data?.url,
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
