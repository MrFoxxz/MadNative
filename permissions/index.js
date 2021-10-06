import {
  check,
  checkMultiple,
  request,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

/* 
    Antes de crear permisos, recordar colocar el use permission
    corresponiente en el siguiente archivo:
    android\app\src\main\AndroidManifest.xml
    */

//REQUEST
export const requestCameraPermission = () => {
  request(PERMISSIONS.ANDROID.CAMERA).then(result => {
    console.log(result);
  });
};

export const requestStoragePermission = () => {
  request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(result => {
    console.log(JSON.stringify(result));
  });
};

export const requestLocationPermission = () => {
  request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
    console.log(JSON.stringify(result));
  });
};

export const requestMultiplePermission = () =>
  requestMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ]).then(statuses => {
    console.log('Camera', statuses[PERMISSIONS.ANDROID.CAMERA]);
    console.log('Storage', statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]);
    console.log('Location', statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]);
  });

//CHECK

export const checkMultiplePermissions = () => {
  checkMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ]).then(statuses => {
    console.log('Camera', statuses[PERMISSIONS.ANDROID.CAMERA]);
    console.log('Storage', statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]);
    console.log('Location', statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]);
  });
};
