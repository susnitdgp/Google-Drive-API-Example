import React, { useState } from 'react';
import { Row, Col, Spin } from 'antd';
import styled from 'styled-components';
import { gapi } from 'gapi-script';
import GoogleDriveImage from '../../assets/images/google-drive.png';
import ListDocuments from '../ListDocuments';
import { style } from './styles';


// Client ID and API key from the Developer Console
const CLIENT_ID = process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;

// Array of API discovery doc URLs for APIs
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

const SelectSource = () => {

    const [listDocumentsVisible, setListDocumentsVisibility] = useState(false);
    const [documents, setDocuments] = useState([]);
    const [isLoadingGoogleDriveApi, setIsLoadingGoogleDriveApi] = useState(false);
    const [isFetchingGoogleDriveFiles, setIsFetchingGoogleDriveFiles] = useState(false);
    const [signedInUser, setSignedInUser] = useState();
    const handleChange = (file) => {};


    return (
        <NewDocumentWrapper>
          <Row gutter={16} className="custom-row">
            <ListDocuments
              visible={listDocumentsVisible}
              onClose={onClose}
              documents={documents}
              onSearch={listFiles}
              signedInUser={signedInUser}
              onSignOut={handleSignOutClick}
              isLoading={isFetchingGoogleDriveFiles}
            />
            <Col span={8}>
              <Spin spinning={isLoadingGoogleDriveApi} style={{ width: '100%' }}>
                <div onClick={() => handleClientLoad()} className="source-container">
                  <div className="icon-container">
                    <div className="icon icon-success">
                      <img height="80" width="80" src={GoogleDriveImage} />
                    </div>
                  </div>
                  <div className="content-container">
                    <p className="title">Google Drive</p>
                    <span className="content">Import documents straight from your google drive</span>
                  </div>
                </div>
              </Spin>
            </Col>
          </Row>
        </NewDocumentWrapper>
      );
}


export default SelectSource;