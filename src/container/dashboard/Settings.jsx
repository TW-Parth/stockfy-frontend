import { IconCopy } from '../../component/global/Icons';
import ImgFile from '../../assets/images/file-upload.svg';
import { useEffect, useState } from 'react';
import { getWebhookConfig } from '../../services/settings/settings.services';

const Settings = () => {
  const [webhook, setWebhook] = useState();

  useEffect(()=> {
    getWebhookUrl();
  }, [])

  const getWebhookUrl = async () => {
    const { data } = await getWebhookConfig();
    setWebhook({
      url: data?.url,
    })
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

                  <div className="img-upload-block">
                    <div className="form-group mb-0">
                      <label className="form-label font-700">Historical Data</label>
                      <div className="user-img-block d-flex justify-content-center">
                        <img src={ImgFile} alt="" />
                      </div>
                      <div className="upload-btn ">
                        <input className="form-control" id="Choose a file" name="file" type="file" />
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
