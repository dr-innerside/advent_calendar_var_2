// // 모든 'door' 클래스 요소에 대한 참조를 가져옵니다.
// const doors = document.querySelectorAll('.door');

// // 각 'door'에 대하여 클릭 이벤트 리스너를 추가합니다.
// doors.forEach(door => {
//   door.addEventListener('click', () => {
//     const backDiv = door.querySelector('.back');

//     const style = window.getComputedStyle(backDiv);
//     const backgroundImageUrl = style.backgroundImage.slice(4, -1).replace(/"/g, "");
//     console.log(backgroundImageUrl)
//     showModal(backgroundImageUrl);
//   });
// });

// Function to display modal
// function showModal(backgroundImageUrl) {
//   // Create a modal element.
//   const modal = document.createElement('div');
//   modal.classList.add('modal');

//   // Set up the modal content.
//   const modalContent = document.createElement('div');

//   const modalImgTag = document.createElement('img');
//   modalImgTag.classList.add('modal-content');
//   modalImgTag.style.backgroundImage = `url(${backgroundImageUrl})`
//   modalContent.appendChild(modalImgTag);

//   // const modalImage = document.createElement('img');
//   // modalImage.src = backgroundImageUrl;
//   // modalImage.classList.add('modal-image'); // Add class for styling

//   const modalTextTag = document.createElement('p');
//   modalTextTag.textContent = 'Your text goes here';
//   modalContent.appendChild(modalTextTag)
//   // modalTextTag.classList.add('modal-content'); // Add class for styling
//   // Add content to the modal.

//   modal.appendChild(modalContent)

//   // Add animation to the modal.
//   modalImgTag.classList.add('zoomIn');
//   // Add the modal to the body.
//   document.body.appendChild(modal);


//   // Close the modal when you click outside the modal.
//   modal.addEventListener('click', () => {
//     document.body.removeChild(modal);
//   });
// }


// ver2
// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
    // 기존에 모달이 있다면 제거합니다.
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 요소를 생성합니다.
    const modal = document.createElement('div');
    modal.className = 'modal hidden';

    // 모달 내용을 담는 컨테이너를 생성합니다.
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content zoomIn';

    // 이미지를 표시할 요소를 생성합니다.
    const image = document.createElement('div');
    image.src = imageUrl;
    image.alt = 'Door Image';
    image.style.width = '100%'; // 이미지 너비를 조정합니다.
    image.style.height = '211px'; // 이미지 높이를 자동으로 조정합니다.

    // 텍스트를 표시할 요소를 생성합니다.
    const textElement = document.createElement('p');
    textElement.textContent = text;
    // textElement.style.color = '#fff'; // 텍스트 색상을 조정합니다.

    // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);

    // 모달에 모달 컨텐트를 추가합니다.
    modal.appendChild(modalContent);

    // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
    modal.addEventListener('click', () => {
        modal.remove(); // 모달을 문서에서 제거합니다.
    });

    // Add animation to the modal.
    // modalImgTag.classList.add('zoomIn');

    // 문서에 모달을 추가합니다.
    document.body.appendChild(modal);
    // 모달을 표시합니다.
    setTimeout(() => modal.classList.remove('hidden'), 0);
}

// 'door' 클래스를 가진 모든 요소에 대한 참조를 가져옵니다.
const doors = document.querySelectorAll('.door');

// 각 'door'에 대하여 클릭 이벤트 리스너를 추가합니다.
doors.forEach(door => {
    door.addEventListener('click', () => {
        // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
        const backDiv = door.querySelector('.back');

        const style = window.getComputedStyle(backDiv);
        const pTag = backDiv.querySelector('p')
        const text = pTag.textContent

        const backgroundImageUrl = style.backgroundImage.slice(4, -1).replace(/"/g, "");

        // showModal 함수를 호출하여 모달을 표시합니다.
        showModal(backgroundImageUrl, text);
    });
});



// 기능2: 공유하기
document.getElementById('shareButton').addEventListener('click', async () => {
    try {
        // Check if the Web Share API is available
        if (!navigator.share) {
            alert('Web Share API is not available on your browser.');
            return;
        }

        // Your share data
        const shareData = {
            title: 'Web Share Example',
            text: 'Check out this web share example!',
            url: window.location.href
        };

        // Invoke the share dialog
        await navigator.share(shareData);
        console.log('Data was shared successfully');
    } catch (err) {
        console.error('Share failed:', err.message);
    }
});


//   배경음 실행 관련
document.addEventListener('DOMContentLoaded', function() {
    const soundElement = document.querySelector('.sound');
    const stopElement = document.querySelector('.stop');
    const bgm = document.querySelector('.bgm');
    
    soundElement.addEventListener('click', function() {
      bgm.play();
    });
    
    stopElement.addEventListener('click', function() {
      bgm.pause();
      bgm.currentTime = 0;
    });
  });