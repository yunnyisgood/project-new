class CommonService(object):

    def print_dframe(self, this):
            print(f'cctv 의 type \n {type(this)} 이다.')
            print(f'cctv 의 column \n {this.columns} 이다.')
            print(f'cctv 의 상위 5개 행\n {type(this.head(1))} 이다.')
            print(f'cctv 의 null\n {this.isnull().sum()}개')