import pandas as pd
from real_estate.models import HousingDto
import xlwings as xw

class HousingService(object):
    dto = HousingDto()

    def new_model(self, payload) -> object:
        this = self.dto
        this.context = './data/'
        this.fname = payload
        return pd.read_excel(this.context + this.fname + '.xlsx', sheet_name='평균전세')


    # 엑셀 암호화 되었을 때
    # def new_model(self, payload):
    #     this = self.dto
    #     this.context = './data/'
    #     this.fname = payload
    #
    #     sheet = xw.Book(this.context + payload + '.xlsx').sheets['매매종합']
    #     row_num = sheet.range(1, 1).end('down').end('down').end('down').row
    #     data_range = 'A2:GE' + str(row_num)
    #     df = sheet[data_range].options(pd.DataFrame, index=False, header=True).value
    #     return df







