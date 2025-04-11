const electron = window.electron;

export const electronMessage = electron.message;
export const setWindowTitle = (title: string): void => {
  electron.setWindowTitle(title);
  window.document.title = title;
};
