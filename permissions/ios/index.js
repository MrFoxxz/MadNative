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
  
 export const requestMediaLibraryPermissionIOS = () => {
    request(PERMISSIONS.IOS.MEDIA_LIBRARY).then(result => {
      console.log(result);
    });
  };

   
  export const requestLocationPermissionIOS = () => {
    request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
      console.log(result);
    });
  }; 
  
  export const requestMultiplePermissionIOS = () =>
    requestMultiple([
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.MEDIA_LIBRARY,
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    ]).then(statuses => {
      console.log('ios Camera', statuses[PERMISSIONS.IOS.CAMERA]);
      console.log(
        'ios Storage',
        statuses[PERMISSIONS.IOS.MEDIA_LIBRARY],
      );
      console.log(
        'ios Location',
        statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
      );
    }); 
  
  //CHECK
  
  export const checkMultiplePermissionsIOS = () => {
    checkMultiple([
        PERMISSIONS.IOS.CAMERA,
        PERMISSIONS.IOS.MEDIA_LIBRARY,
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    ]).then(statuses => {
      console.log('ios Camera', statuses[PERMISSIONS.IOS.CAMERA]);
      console.log(
        'ios Storage',
        statuses[PERMISSIONS.IOS.MEDIA_LIBRARY],
      );
      console.log(
        'ios Storage',
        statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
      );
    });
  };
  