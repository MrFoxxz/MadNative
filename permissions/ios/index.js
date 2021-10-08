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
  export const requestCameraPermissionIOS = () => {
    request(PERMISSIONS.IOS.CAMERA).then(result => {
      console.log(result);
    });
  };
  
 /*  export const requestStoragePermissionAndroid = () => {
    request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(result => {
      console.log(JSON.stringify(result));
    });
  };
  
  export const requestLocationPermissionAndroid = () => {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
      console.log(JSON.stringify(result));
    });
  }; */
  
/*   export const requestMultiplePermissionAndroid = () =>
    requestMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ]).then(statuses => {
      console.log('Android Camera', statuses[PERMISSIONS.ANDROID.CAMERA]);
      console.log(
        'Android Storage',
        statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
      );
      console.log(
        'Android Location',
        statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
      );
    }); */
  
  //CHECK
  
  export const checkMultiplePermissionsIOS = () => {
    checkMultiple([
        PERMISSIONS.IOS.CAMERA,
    ]).then(statuses => {
      console.log('ios Camera', statuses[PERMISSIONS.IOS.CAMERA]);
    });
  };
  