import {
    check,
    checkMultiple,
    request,
    requestMultiple,
    PERMISSIONS,
    RESULTS,
  } from 'react-native-permissions';
  
  //REQUEST
  export const requestCameraPermissionIOS = () => {
    request(PERMISSIONS.IOS.CAMERA).then(result => {
      console.log(result);
    });
  };

  export const requestMicroPermissionIOS = () => {
    request(PERMISSIONS.IOS.MICROPHONE).then(result => {
      console.log(result);
    });
  };
  
 export const requestMediaLibraryPermissionIOS = () => {
    request(PERMISSIONS.IOS.MEDIA_LIBRARY).then(result => {
      console.log(result);
    });
  };

   
  export const requestLocationPermissionIOS = () => {
    request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
      console.log(result);
    });
  }; 
  
  export const requestMultiplePermissionIOS = () =>
    requestMultiple([
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.MICROPHONE,
      PERMISSIONS.IOS.MEDIA_LIBRARY,
      PERMISSIONS.IOS.LOCATION_ALWAYS,
    ]).then(statuses => {
      console.log('ios Camera', statuses[PERMISSIONS.IOS.CAMERA]);
      console.log('ios Micro', statuses[PERMISSIONS.IOS.MICROPHONE]);
      console.log(
        'ios Storage',
        statuses[PERMISSIONS.IOS.MEDIA_LIBRARY],
      );
      console.log(
        'ios Location',
        statuses[PERMISSIONS.IOS.LOCATION_ALWAYS],
      );
    }); 
  
  //CHECK
  
  export const checkMultiplePermissionsIOS = () => {
    checkMultiple([
        PERMISSIONS.IOS.CAMERA,
        PERMISSIONS.IOS.MICROPHONE,
        PERMISSIONS.IOS.MEDIA_LIBRARY,
        PERMISSIONS.IOS.LOCATION_ALWAYS
    ]).then(statuses => {
      console.log('ios Camera', statuses[PERMISSIONS.IOS.CAMERA]);
      console.log('ios Micro', statuses[PERMISSIONS.IOS.MICROPHONE]);
      console.log(
        'ios Storage',
        statuses[PERMISSIONS.IOS.MEDIA_LIBRARY],
      );
      console.log(
        'ios Location',
        statuses[PERMISSIONS.IOS.LOCATION_ALWAYS],
      );
    });
  };
  