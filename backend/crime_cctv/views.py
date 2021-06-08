from services import CCTVServices
from common.services import CommonService

class CCTVApi(CommonService):

    @staticmethod
    def main():
        while 1:
            api = CCTVServices()
            printImport = CommonService()
            menu = input('0-Exit 1-read_csv 2-read_excel')
            if menu == '0':
                break
            elif menu == '1':
                this = api.new_model_from_csv('us_unemployment.csv')
                print(this)
                printImport.print_dframe(this)
            elif menu == '2':
                this = api.new_model_from_excel('pop_in_seoul')
                print(this)
                printImport.print_dframe(this)
            else:
                continue


CCTVApi.main()

