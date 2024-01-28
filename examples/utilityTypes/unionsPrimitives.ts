// Unions for primitives
type UserStatus = 'online' | 'offline' | 'away';

function setStatus(status: UserStatus) {
  // ...
}

setStatus('online');
setStatus('offline');
setStatus('away');
// setStatus('foo'); // Error!

