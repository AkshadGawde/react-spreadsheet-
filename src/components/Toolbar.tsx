import React, { useState } from 'react';

const Toolbar: React.FC = () => {
  const [isToolbarExpanded, setIsToolbarExpanded] = useState(false);

  const handleToolbarToggle = () => {
    setIsToolbarExpanded(!isToolbarExpanded);
    console.log('Toolbar toggle:', !isToolbarExpanded);
  };

  const handleHideFields = () => {
    console.log('Hide fields clicked');
  };

  const handleSort = () => {
    console.log('Sort clicked');
  };

  const handleFilter = () => {
    console.log('Filter clicked');
  };

  const handleCellView = () => {
    console.log('Cell view clicked');
  };

  const handleImport = () => {
    console.log('Import clicked');
  };

  const handleExport = () => {
    console.log('Export clicked');
  };

  const handleShare = () => {
    console.log('Share clicked');
  };

  const handleNewAction = () => {
    console.log('New Action clicked');
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-3">
        <button 
          onClick={handleToolbarToggle}
          className="flex items-center text-gray-600 text-sm hover:text-gray-800"
        >
          <span>Tool bar</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.91665 3.31767C7.07259 3.16118 7.32585 3.16073 7.48234 3.31666L11.8699 7.68864C12.0425 7.8606 12.0425 8.14005 11.8699 8.31201L7.48234 12.684C7.32585 12.8399 7.07259 12.8395 6.91665 12.683C6.76072 12.5265 6.76117 12.2732 6.91766 12.1173L11.0493 8.00033L6.91766 3.88335C6.76117 3.72742 6.76072 3.47416 6.91665 3.31767ZM3.71665 3.31767C3.87259 3.16118 4.12585 3.16073 4.28234 3.31666L8.66993 7.68864C8.8425 7.8606 8.8425 8.14005 8.66993 8.31201L4.28234 12.684C4.12585 12.8399 3.87259 12.8395 3.71665 12.683C3.56072 12.5265 3.56117 12.2732 3.71766 12.1173L7.84933 8.00033L3.71766 3.88335C3.56117 3.72742 3.56072 3.47416 3.71665 3.31767Z" fill="#121212"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.21175 3.3875C4.09439 3.27055 3.90444 3.27089 3.78749 3.38825C3.67054 3.50562 3.67088 3.69557 3.78825 3.81252L7.91991 7.92949C7.93874 7.94825 7.94933 7.97374 7.94933 8.00033C7.94933 8.02691 7.93874 8.0524 7.91991 8.07116L3.78825 12.1881C3.67088 12.3051 3.67054 12.495 3.78749 12.6124C3.90444 12.7298 4.09439 12.7301 4.21175 12.6132L8.59934 8.24117C8.73269 8.10829 8.73269 7.89236 8.59934 7.75948L4.21175 3.3875ZM3.64582 3.24708C3.84073 3.05147 4.15731 3.05091 4.35292 3.24582L8.74051 7.61781C8.9523 7.82885 8.9523 8.17181 8.74051 8.38284L4.35292 12.7548C4.15731 12.9497 3.84073 12.9492 3.64582 12.7536C3.4509 12.558 3.45147 12.2414 3.64708 12.0465L7.70765 8.00033L3.64708 3.95419C3.45147 3.75927 3.4509 3.44269 3.64582 3.24708ZM7.41175 3.3875C7.29439 3.27055 7.10444 3.27089 6.98749 3.38825C6.87054 3.50562 6.87088 3.69557 6.98825 3.81252L11.1199 7.92949C11.1387 7.94825 11.1493 7.97374 11.1493 8.00033C11.1493 8.02691 11.1387 8.0524 11.1199 8.07116L6.98825 12.1881C6.87088 12.3051 6.87054 12.495 6.98749 12.6124C7.10444 12.7298 7.29439 12.7301 7.41175 12.6132L11.7993 8.24117C11.9327 8.10829 11.9327 7.89236 11.7993 7.75948L7.41175 3.3875ZM6.84582 3.24708C7.04073 3.05147 7.35731 3.05091 7.55292 3.24582L11.9405 7.61781C12.1523 7.82885 12.1523 8.17181 11.9405 8.38284L7.55292 12.7548C7.35731 12.9497 7.04073 12.9492 6.84582 12.7536C6.6509 12.558 6.65147 12.2414 6.84708 12.0465L10.9077 8.00033L6.84708 3.95419C6.65147 3.75927 6.6509 3.44269 6.84582 3.24708Z" fill="#121212"/>
</svg>

        </button>
        
        <button 
          onClick={handleHideFields}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.05 6.05M9.878 9.878a3 3 0 105.303 5.303m0 0L18.364 18.364M15.536 15.536L18.364 18.364" />
          </svg>
          Hide fields
        </button>
        
        <button 
          onClick={handleSort}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          Sort
        </button>
        
        <button 
          onClick={handleFilter}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter
        </button>
        
        <button 
          onClick={handleCellView}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Cell view
        </button>
      </div>
      
      <div className="flex items-center space-x-3">
        <button 
          onClick={handleImport}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Import
        </button>
        
        <button 
          onClick={handleExport}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export
        </button>
        
        <button 
          onClick={handleShare}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.62231 3.33333H8.50915C8.85433 3.33333 9.13415 3.61315 9.13415 3.95833C9.13415 4.27474 8.89902 4.53624 8.59396 4.57762L8.50915 4.58333H5.62231C4.62993 4.58333 3.81761 5.3543 3.75164 6.32995L3.74731 6.45833V14.375C3.74731 15.3674 4.51828 16.1797 5.49394 16.2457L5.62231 16.25H13.5396C14.532 16.25 15.3443 15.479 15.4103 14.5034L15.4146 14.375V13.9602C15.4146 13.615 15.6944 13.3352 16.0396 13.3352C16.356 13.3352 16.6175 13.5703 16.6589 13.8754L16.6646 13.9602V14.375C16.6646 16.0452 15.3543 17.4094 13.7056 17.4957L13.5396 17.5H5.62231C3.9521 17.5 2.58792 16.1897 2.50165 14.541L2.49731 14.375V6.45833C2.49731 4.78811 3.80762 3.42393 5.45635 3.33766L5.62231 3.33333H8.50915H5.62231ZM12.084 5.43321V3.12499C12.084 2.60502 12.673 2.32495 13.0731 2.6165L13.1416 2.67395L18.1371 7.46561C18.3703 7.68923 18.3915 8.04842 18.2008 8.29672L18.1372 8.36764L13.1417 13.1608C12.7665 13.5209 12.1565 13.2897 12.0899 12.7991L12.084 12.7099V10.4388L11.7977 10.4639C9.79799 10.6725 7.88129 11.5732 6.0356 13.1811C5.60301 13.558 4.93374 13.2017 5.00488 12.6324C5.55888 8.19941 7.8771 5.75607 11.8345 5.44958L12.084 5.43321V3.12499V5.43321ZM13.334 4.59053V6.04166C13.334 6.38684 13.0542 6.66666 12.709 6.66666C9.48114 6.66666 7.48062 8.06344 6.61625 10.9643L6.55037 11.1965L6.84386 10.9991C8.7076 9.78099 10.6654 9.16666 12.709 9.16666C13.0254 9.16666 13.2869 9.40179 13.3283 9.70685L13.334 9.79166V11.244L16.8017 7.91673L13.334 4.59053Z" fill="#545454"/>
</svg>

          Share
        </button>
        
        <button 
          onClick={handleNewAction}
          className="flex items-center px-4 py-1.5 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0001 2.5C10.3452 2.5 10.6251 2.77982 10.6251 3.125V7.91667H12.7046C13.9702 7.91667 14.9963 8.94268 14.9963 10.2083V15.368L16.4334 13.9328C16.6777 13.6888 17.0734 13.6891 17.3173 13.9334C17.5612 14.1776 17.5609 14.5733 17.3167 14.8172L14.8129 17.3177C14.5688 17.5615 14.1733 17.5613 13.9293 17.3174L11.4289 14.8169C11.1848 14.5729 11.1848 14.1771 11.4289 13.9331C11.673 13.689 12.0687 13.689 12.3128 13.9331L13.7463 15.3665V10.2083C13.7463 9.63304 13.2799 9.16667 12.7046 9.16667H7.29165C6.71635 9.16667 6.24998 9.63304 6.24998 10.2083V15.3665L7.68346 13.9331C7.92754 13.689 8.32327 13.689 8.56734 13.9331C8.81142 14.1771 8.81142 14.5729 8.56734 14.8169L6.06692 17.3174C5.82285 17.5614 5.42712 17.5614 5.18304 17.3174L2.68257 14.8169C2.43849 14.5729 2.43849 14.1771 2.68257 13.9331C2.92664 13.689 3.32237 13.689 3.56645 13.9331L4.99998 15.3666V10.2083C4.99998 8.94268 6.026 7.91667 7.29165 7.91667H9.37506V3.125C9.37506 2.77982 9.65488 2.5 10.0001 2.5Z" fill="white"/>
</svg>

          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;