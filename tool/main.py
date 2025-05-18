from PyQt6.QtWidgets import QApplication,QMainWindow,QHBoxLayout,QWidget,QMessageBox
from PyQt6 import uic
import sys
from datetime import datetime
from PyQt5.QtCore import Qt
from PyQt6.QtCore import QTimer
import json
import os
class Database:
    def __init__(self,name,date,CAR):
        self.name = name
        self.date = date
        self.CAR = CAR


class PageHome(QMainWindow):
    def __init__(self):
        super().__init__()
        self.ui = uic.loadUi("tool.ui",self)
        
        self.ui.btnSave.clicked.connect(self.saveData)
        self.ui.txtName.textChanged.connect(self.checkNameExists)
    def keyPressEvent(self,event):
        if event.key() == Qt.Key.Key_Return:
            self.saveData()
    def showMessage(self,message):
        self.ui.lb_message.setText(f"Tìm thấy dữ liệu cho: {message.upper()}")
        QTimer.singleShot(2000, lambda: self.ui.lb_message.clear())
            
    def checkNameExists(self):
        # Lấy tên từ ô nhập liệu
        name = self.ui.txtName.text()
        if not name.strip():
            return
        
        # Kiểm tra file database.json
        
        
        file_path = "../src/database.json"
        if not os.path.exists(file_path):
            return
            
        try:
            with open(file_path, "r", encoding="utf-8") as file:
                data_list = json.load(file)
                if not isinstance(data_list, list):
                    data_list = [data_list]
                
                # Tìm kiếm đối tượng có tên trùng khớp
                for item in data_list:
                    if item.get("name") == name:
                        print(f"Tìm thấy dữ liệu cho: {name}")
                        self.showMessage(f"Tìm thấy dữ liệu cho: {name}")
                        self.ui.btnSave.setText(f"Cập nhật cho {name.upper()}")
                        # Lấy danh sách CAR từ dữ liệu
                        car_data = item.get("CAR", [])
                        
                        # Tạo một list texts có 14 phần tử rỗng
                        texts = [""] * 14
                        
                        # Điền dữ liệu từ CAR vào texts
                        for entry in car_data:
                            # Lấy số buổi từ section (vd: "Buổi 1" -> 1)
                            try:
                                section = entry.get("section", "")
                                if section.startswith("Buổi "):
                                    index = int(section.split(" ")[1]) - 1  # chuyển về index 0-based
                                    if 0 <= index < 14:
                                        texts[index] = entry.get("lession_content", "")
                            except (ValueError, IndexError):
                                continue
                                
                        # Gán giá trị vào các ô text
                        text_fields = [
                            self.ui._1, self.ui._2, self.ui._3, self.ui._4, 
                            self.ui._5, self.ui._6, self.ui._7, self.ui._8,
                            self.ui._9, self.ui._10, self.ui._11, self.ui._12,
                            self.ui._13, self.ui._14
                        ]
                        
                        for i, field in enumerate(text_fields):
                            if i < len(texts):
                                field.setPlainText(texts[i])
                        
                        break  # Thoát khỏi vòng lặp sau khi tìm thấy tên trùng khớp
                    else:
                        self.ui.btnSave.setText("Lưu lại")
                        self.ui._1.clear()
                        self.ui._2.clear()
                        self.ui._3.clear()
                        self.ui._4.clear()
                        self.ui._5.clear()
                        self.ui._6.clear()
                        self.ui._7.clear()
                        self.ui._8.clear()
                        self.ui._9.clear()
                        self.ui._10.clear()
                        self.ui._11.clear()
                        self.ui._12.clear()
                        self.ui._13.clear()
                        self.ui._14.clear() 
        except Exception as e:
            print(f"Lỗi khi đọc dữ liệu: {e}")
            self.showMessage(f"Lỗi khi đọc dữ liệu: {e}")
    
    def saveData(self):
        name = self.ui.txtName.text()
        current_year = datetime.now().year
        print(current_year)
        
        _1 = self.ui._1.toPlainText()
        _2 = self.ui._2.toPlainText()
        _3 = self.ui._3.toPlainText()
        _4 = self.ui._4.toPlainText()
        _5 = self.ui._5.toPlainText()
        _6 = self.ui._6.toPlainText()
        _7 = self.ui._7.toPlainText()
        _8 = self.ui._8.toPlainText()
        _9 = self.ui._9.toPlainText()
        _10 = self.ui._10.toPlainText()
        _11 = self.ui._11.toPlainText()
        _12 = self.ui._12.toPlainText()
        _13 = self.ui._13.toPlainText()
        _14 = self.ui._14.toPlainText()
        
        
        # Tạo danh sách các buổi học theo định dạng yêu cầu
        lessons = []
        texts = [_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13,_14]
        
        for i, content in enumerate(texts):
            if content.strip():  # Chỉ thêm những buổi có nội dung
                lessons.append({
                    "section": f"Buổi {i+1}",
                    "lession_content": content
                })
        
        # Tạo đối tượng dữ liệu hoàn chỉnh
        data = {
            "name": name,
            "date": str(current_year),
            "CAR": lessons
        }
        
        print(data)
        
        file_path = "../src/database.json"
        try:
            existing_data = []
            name_exists = False
            # Kiểm tra xem file đã tồn tại chưa
            if os.path.exists(file_path):
                # Đọc dữ liệu hiện có
                try:
                    with open(file_path, "r", encoding="utf-8") as file:
                        existing_data = json.load(file)
                        # Đảm bảo existing_data là một list
                        if not isinstance(existing_data, list):
                            existing_data = [existing_data]
                            
                    # Kiểm tra xem tên đã tồn tại chưa
                    for i, item in enumerate(existing_data):
                        if item.get("name") == name:
                            # Cập nhật dữ liệu hiện có
                            existing_data[i] = data
                            name_exists = True
                            print(f"Updated existing record for: {name}")
                            break
                            
                except json.JSONDecodeError:
                    # Nếu file không phải JSON hợp lệ, bắt đầu với mảng rỗng
                    existing_data = []
            
            # Nếu tên chưa tồn tại, thêm mới vào danh sách
            if not name_exists:
                existing_data.append(data)
                print(f"Added new record for: {name}")
            
            # Ghi lại tất cả dữ liệu
            with open(file_path, "w", encoding="utf-8") as file:
                json.dump(existing_data, file, ensure_ascii=False, indent=4)
            print("Saved data to database.json")
        except Exception as e:
            print(f"Error saving data: {e}")
            QMessageBox.warning(self, "Save Error", f"Unable to save data: {e}")
            return
        
        QMessageBox.information(self, "Success", "Data saved successfully.")
if __name__ == "__main__":
    app = QApplication(sys.argv)
    pageHome = PageHome()
    pageHome.show()
    
    sys.exit(app.exec())