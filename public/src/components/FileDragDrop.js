import React from 'react';
import PropTypes from 'prop-types';
import { FiUploadCloud } from "react-icons/fi"
import styles from "../stylesheets/FileDragDrop.module.css"

export default function FilesDragAndDrop({ onUpload }) {
  return (
    <div className={styles.FilesDragAndDrop}>
      <div className={styles.icon}>
        <FiUploadCloud />
      </div>
      <span className={styles.heading}><span>Click To Upload</span> or drag and drop</span>
      <span>The maximum file size is 1GB for audio and 10GB for videos. <br /> Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb, flv, m4a, mov, wmv, wma</span>
      <span
        role='img'
        aria-label='emoji'
        className={styles.areaIcon}
      >
      </span>
    </div>
  );
}

FilesDragAndDrop.propTypes = {
  onUpload: PropTypes.func.isRequired,
};